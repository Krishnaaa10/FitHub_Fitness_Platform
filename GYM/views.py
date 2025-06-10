from django.shortcuts import render

def calender(request):
    return render(request, 'index.html')