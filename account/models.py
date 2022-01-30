from django.conf import settings
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_of_birth = models.DateField(blank=True, null=True)
    photo = models.ImageField(blank=True, upload_to="users/%Y/%m/%d")

    def __str__(self):
        return f"Profile for user {self.user.username}"
