from django.conf import settings
from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
subject = 'Test Email'
message = 'This is a test email sent from my Django app.'
from_email = settings.EMAIL_HOST_USER
recipient_list = ['testeemail@gmail.com']

send_mail(subject, message, from_email, recipient_list, fail_silently=False)