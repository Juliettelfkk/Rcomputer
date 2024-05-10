<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <title>Add product</title>
</head>

<body>
    <div class="container h-100">
        <div class="row">
            <div class="col text-start">
                <h1 class="display-3 fw-bold text-dark">Add Product</h1>
            </div>
            <div class="col text-end my-auto">
                <a href="{{ route('products') }}">
                    <button class="btn btn-danger fw-bold shadow"><i
                            class="bi bi-x-square-fill me-2"></i></i>Cancel</button>
                </a>
            </div>
        </div>

        <div class="d-flex justify-content-center align-items-center mt-5">
            <form action="" method="post">
                <div class="row">
                    <div class="col">
                        <input class="form-control form-control-lg my-2 shadow" type="text" name="name"
                            placeholder="Name">
                    </div>
                    <div class="col">
                        <input class="form-control form-control-lg my-2 shadow" type="text" name="sku"
                            placeholder="SKU">
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <select name="brand" class="form-control form-select form-control-lg my-2 shadow">
                            <option selected>Brand</option>
                            <hr>
                            <option value="invedia">Invidia</option>
                            <option value="amd">AMD</option>
                            <option value="intel">Intel</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="category" class="form-control form-select form-control-lg my-2 shadow">
                            <option selected>Categories</option>
                            <hr>
                            <option value="invedia">Laptop</option>
                            <option value="amd">Disctop</option>
                            <option value="intel">Accessories</option>
                        </select>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <div class="input-group">
                            <input placeholder="Price" class="form-control form-control-lg my-2 shadow" type="number" min="0"  name="price">
                        </div>
                    </div>
                    <div class="col">
                        <input placeholder="Discount" class="form-control form-control-lg my-2 shadow" type="number" min="0" name="discount">
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <input placeholder="Quantity" class="form-control form-control-lg my-2 shadow" type="number" min="0" name="quantity">
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <textarea class="form-control form-control-lg my-2 shadow" name="discription" cols="40" rows="3"
                            placeholder="Description"></textarea>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <input class="form-control form-control-lg my-2 shadow" type="file" name="images"
                            placeholder="product images">
                    </div>
                </div>
                <div class="row ">
                    <div class="col text-end">
                        <button class="btn btn-success hover text-light fw- my-2  shadow" type="submit"><i
                                class="bi bi-save-fill me-2"></i>Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>

</html>
