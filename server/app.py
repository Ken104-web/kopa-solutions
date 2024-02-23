from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Resource, Api
from flask_cors import CORS
import requests

from models import db, Account

app = Flask( __name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)
CORS(app)



class  Acc(Resource):
    def get(self):
        url = "https://infra.devskills.app/api/accounting/transactions"
        r = requests.get(url)

        if r.status_code != 200:
              return []
        data = r.json()
        results = []

        for result in data:
            token = result.get("account_id")
            amount = result.get("amount")

            results.append({'Account_Id':token, "amount": amount,})
        return results


    def post(self):
            if request.headers.get('Content-Type') != 'application/json':
                return {'error': 'Content-Type must be application/json'}, 400
            
            data = request.get_json()

            new_id = Account(
                token=data['Account_Id'],
                amount = data['amount']
            )
            db.session.add(new_id)
            db.session.commit()

            return make_response(new_id.to_dict(), 201)
        
api.add_resource(Acc, "/account")



if __name__ == "__main__":
    app.run(port="5000", debug=True)


