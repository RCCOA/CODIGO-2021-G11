from django.shortcuts import render
from django.template import context
from .models import Categoria,Producto

# Create your views here.
def index(request):
    listaProductos = Producto.objects.all()
    listaCategorias = Categoria.objects.all()
    context = {
        'productos': listaProductos,
        'categorias': listaCategorias
    }
    return render(request,'index.html',context)

def productosPorCategoria(request,categoria_id):
    objCategoria = Categoria.objects.get(pk=categoria_id)
    listaCategorias = Categoria.objects.all()
    listaProductos = objCategoria.producto_set.all()
    context = {
        'productos': listaProductos,
        'categorias': listaCategorias
    }
    return render(request,'index.html',context)

def producto(request,producto_id):
    objProducto = Producto.objects.get(pk=producto_id)
    context = {
        'producto':objProducto
    }
    return render(request,'producto.html',context)

def carrito(request):
    return render(request,'carrito.html') 