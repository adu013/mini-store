from celery import shared_task


@shared_task
def test_celery(x, y):
    return (x + y)
