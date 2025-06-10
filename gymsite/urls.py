from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path('',views.gym,name='gym'),
    path('login',views.login,name='login'),
    # path('register',views.register,name='register'),
    path('home',views.home, name='home'),
    path('ekart',views.ekart, name='ekart'),
    path('subscription',views.subscription, name='subscription'),
    path('contact',views.contact,name='contact'),
    path('payment',views.payment,name='payment'),
    path('video',views.video,name='video'),
    path('biceps',views.biceps,name='biceps'),
    path('squats',views.squats,name='squats'),
    path('benchpress', views.benchpress, name='benchpress'),
    path('chestshoulder', views.chestshoulder, name='chestshoulder'),
    path('chest', views.chest, name='chest'),
    path('back', views.back, name='back'),
    path('pullups', views.pullups, name='pullups'),
    path('abs', views.abs, name='abs'),
    path('pushups', views.pushups, name='pushups'),
]
