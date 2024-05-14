<div class="d-block">
    <a href="{{ route('dashboard') }}" class="text-decoration-none text-dark">
        <img src="{{ asset("logo/logo.png") }}" alt="logo" width="180px" height="180px">
    </a>
</div>
<div class="d-block">
    <div class="d-block">
        <a href="{{ route('products') }}">
            <button class="w-75 btn btn-dark p-2 my-3 w-50 shadow rounded rounded-pill">
                <i class="bi bi-wallet2 me-2"></i>
                Products
            </button>
        </a>
    </div>
    <div class="d-block">
        <a href="{{ route('brands') }}">
            <button class="w-75 btn btn-dark p-2 my-3 w-50 shadow rounded rounded-pill">
                <i class="bi bi-trello me-3"></i>
                Brands
            </button></a>
    </div>
    <div class="d-block">
        <a href="{{ route('categories') }}">
            <button class="w-75 btn btn-dark p-2 my-3 w-50 shadow rounded rounded-pill">
                <i class="bi bi-tags-fill me-2"></i>
                Categorys
            </button>
        </a>
    </div>
    <div class="d-block">
        <a href="{{ route('orders') }}">
            <button class="w-75 btn btn-dark p-2 my-3 w-50 shadow rounded rounded-pill">
                <i class="bi bi-list-ol me-2"></i>
                Orders
            </button>
        </a>
    </div>
</div>
<div class="d-block">
    <a href="#">
        <button class="w-75 btn btn-dark p-2 my-3 w-50 shadow rounded rounded-pill">
            <i class="bi bi-box-arrow-right me-2"></i>
            Log out
        </button>
    </a>
</div>
