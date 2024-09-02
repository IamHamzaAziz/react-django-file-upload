from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ImageModel
from .serializers import ImageSerializer

# Create your views here.
class HandleImages(APIView):
    def post(self, request, *args, **kwargs):
        name = request.data.get('name')
        image = request.FILES.get('image')

        if not name or not image:
            return Response({'error': 'Name and image are required'}, status=400)

        img = ImageModel(name=name, image=image)
        img.save()

        return Response({ 'message': 'Image saved successfully' })
    
    def get(self, request, *args, **kwargs):
        images = ImageModel.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)



