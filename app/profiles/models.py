from django.contrib.auth import get_user_model
from django.db import models

from commons.models import TimeStampedModel

User = get_user_model()


class Profile(TimeStampedModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=50, default="")

    def __str__(self):
        return self.user.username
