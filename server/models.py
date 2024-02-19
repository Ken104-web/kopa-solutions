from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Account(db.Model):
    __tablename__ = 'accounts'

    id  = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.Integer)
    amount = db.column(db.Integer)

    def __repr__(self):
        return f'<Account {self.token} | Amount: {self.amount}>'