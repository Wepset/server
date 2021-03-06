<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Get a listing of products with some conditions.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $query = Product::query();

        foreach ($request->all() as $key => $arg) {
            $query->where(strtolower($key), 'like', "%{$arg}%");
        }

        $products = $query->get();

        foreach ($products as $product) {
            $product->preco_venda = (new OrderController())->price($product, 3);
            $product->quantity = 0;
        }

        return response()->json($products);
    }
}
