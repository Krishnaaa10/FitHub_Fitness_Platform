from django.shortcuts import render, HttpResponse, redirect
from .models import Contact

# Create your views here.
def gym(request):
    return render(request, 'home/gym.html')

def home(request):
    return render(request, 'home/home.html')

def ekart(request):
    return render(request, 'home/ekart.html')

def subscription(request):
    return render(request, 'home/h.html')

def login(request):
    return render(request, 'home/login.html')
def payment(request):
    return render(request, 'home/new.html')
def video(request):
    return render(request, 'home/exercise.html')
def biceps(request):
    return render(request, 'home/bicep.html')
def squats(request):
    return render(request, 'home/squats.html')
def benchpress(request):
    return render(request, 'home/benchpress.html')
def chestshoulder(request):
    return render(request, 'home/chest-shoulder.html')
def chest(request):
    return render(request, 'home/chest.html')
def back(request):
    return render(request, 'home/back.html')
def pullups(request):
    return render(request, 'home/pull-ups.html')
def abs(request):
    return render(request, 'home/abs.html')
def pushups(request):
    return render(request, 'home/pushup.html')

# def register(request):
#     return render(request,'home/gym.html')

def contact(request):
    if request.method=="POST":
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        phone = request.POST.get('phone','')
        desc = request.POST.get('desc','')
        contact = Contact(name=name, email=email, phone=phone, desc=desc)
        contact.save()

    return render(request,'home/contact.html')