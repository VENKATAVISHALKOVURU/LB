from app import app, db
from app.models import User
with app.app_context():
    users = User.query.all()
    for user in users:
        print(f"User: {user.username}")
