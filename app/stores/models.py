from django.db import models

from commons.models import TimeStampedModel


class Product(TimeStampedModel):
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    img = models.ImageField(null=True, blank=True, default=None)

    def __str__(self):
        return self.name
