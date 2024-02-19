from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Resource, Api

from models import db, Account

app = Flask( __name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

class  Acc(Resource):
    def get(self):
        accounts = [account.to_dict() for account in Account.query.all()]
        return make_response(jsonify(plants), 200)

    def post(self):
        data = request.get_json()

        new_id = Account(
            token=data["token"],
            amount = data['amount']
        )
        db.session.add(new_id)
        db.session.commit()

        return make_response(new_id.to_dict(), 201)
    
api.add_resource(Acc, "/account")



if __name__ == "__main__":
    app.run(port="5000", debug=True)


