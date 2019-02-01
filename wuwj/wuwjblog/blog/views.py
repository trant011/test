from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
# Create your views here.


def writtingdata(request):
    a = {"docker": "ok!", "跨域请求":"123456","first":'123','3131':'3131','webpack':'webpack'}
    b = {'data':['docker','跨域请求','first']}
    if request.method == 'GET':
        return JsonResponse(b)

    data = json.loads(request.body.decode('utf-8'))['param']
    if data in a:
        req = a[data]
    else:
        req = 'no data'
    return HttpResponse(req)

