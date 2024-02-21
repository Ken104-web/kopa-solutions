from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Account(db.Model):
    __tablename__ = 'accounts'

    id  = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.Integer)
    amount = db.Column(db.Integer)

    def to_dict(self):
        return {
            'token': self.token,
            'amount': self.amount,
        }

    def __repr__(self):
        return f'<Account {self.token} | Amount: {self.amount}>'