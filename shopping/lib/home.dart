import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';
import 'package:shopping/cartmodel.dart';

// ignore: must_be_immutable
class HomePage extends StatelessWidget {
  List<Product> _products = [
    Product(
      id: 1,
      name: "GemiBook XPro",
      brand: "Microsoft",
      category: "laptop",
      discount: "0",
      imgUrl:
          "https://eu.chuwi.com/cdn/shop/products/GemiBookXPro_PNG.png?v=1684996946",
      price: 15000,
      qty: 1,
    ),
    Product(
      id: 2,
      name: "noctua ultra silent fan",
      brand: "noctua",
      category: "laptop",
      discount: "0",
      imgUrl:
          "https://cdn-reichelt.de/bilder/web/xxl_ws/E910/NOCTUA_NF-A8-5V-PWM_01.png",
      price: 5000,
      qty: 1,
    ),
    Product(
      id: 3,
      name: "RTX-3050",
      brand: "GeForce",
      category: "laptop",
      discount: "500",
      imgUrl:
          "https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX3050/RTX_3050_gaming_X_8G/msi-3050-gaming-x-graphics-card.png",
      price: 60000,
      qty: 1,
    ),
    Product(
      id: 4,
      name: "Ryzen 3",
      brand: "AMD",
      category: "processor",
      discount: "1000",
      imgUrl:
          "https://pcrevolution.com.ph/cdn/shop/products/RYZEN33200G4CORE3.6GHZPNG_580x.png?v=1631069239",
      price: 54000,
      qty: 1,
    ),
    Product(
      id: 5,
      name: "H7",
      brand: "NZXT",
      category: "case",
      discount: "500",
      imgUrl:
          "https://www.datocms-assets.com/34299/1654199794-case_h7_solid_w_hero_pl_png.png",
      price: 90000,
      qty: 1,
    ),
    Product(
      id: 6,
      name: "thumbnail matherBard",
      brand: "ASUS",
      category: "motherboard",
      discount: "0",
      imgUrl:
          "https://dlcdnwebimgs.asus.com/files/media/53D30A49-0B79-48F2-AD43-DEB7F954AE2B/v1/img/kv/ROG-Strix-B760-F-Gaming.png",
      price: 150000,
      qty: 1,
    ),
    Product(
      id: 7,
      name: "I5",
      brand: "Intel",
      category: "processor",
      discount: "800",
      imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f0/Intel_Core_i5_Logo_2020.png",
      price: 48000,
      qty: 1,
    ),
    Product(
      id: 8,
      name: "hyper",
      brand: "cooler master",
      category: "psu",
      discount: "500",
      imgUrl:
          "https://i.ebayimg.com/00/s/MTM1MFgxMzUw/z/o6sAAOSwX2dhjOsI/\$_1.PNG",
      price: 15000,
      qty: 1,
    ),
    Product(
      id: 9,
      name: "wixmp",
      brand: "dragon",
      category: "keyBoard",
      discount: "0",
      imgUrl:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36a30296-48ab-4d5a-b8fd-16ee9aeb3427/dfxyqmn-90998eb2-ca26-4b90-8db7-8d2f55ab5ee8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2YTMwMjk2LTQ4YWItNGQ1YS1iOGZkLTE2ZWU5YWViMzQyN1wvZGZ4eXFtbi05MDk5OGViMi1jYTI2LTRiOTAtOGRiNy04ZDJmNTVhYjVlZTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C3QhLQ_mu0_uniXZryY4RCvBIyITeyVt4KHXae85bXM",
      price: 20000,
      qty: 1,
    ),
    Product(
      id: 10,
      name: "MASTER 3",
      brand: "logitech",
      category: "keyBoard",
      discount: "500",
      imgUrl:
          "https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-side-view-black.png",
      price: 25000,
      qty: 1,
    ),
    Product(
      id: 11,
      name: "edge m22e",
      brand: "samsung",
      category: "keyBoard",
      discount: "0",
      imgUrl:
          "https://www.buydig.com/shop/product-image.aspx?size=500&picId=964067",
      price: 25000,
      qty: 1,
    ),
    Product(
      id: 13,
      name: "light Speed",
      brand: "logiTech",
      category: "headPHone",
      discount: "500",
      imgUrl:
          "https://xoticpc.com/cdn/shop/products/71xNjrzG69L._AC_SL1500.png?v=1675206570",
      price: 25000,
      qty: 1,
    ),
    Product(
      id: 14,
      name: "EVO Pro970 NVME",
      brand: "samsung",
      category: "storage",
      discount: "0",
      imgUrl:
          "https://images.samsung.com/is/image/samsung/p6pim/de/mz-v7s500bw/gallery/de-970-evo-plus-nvme-m2-ssd-mz-v7s500bw-thumb-503979009?\$480_480_PNG\$",
      price: 25000,
      qty: 1,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.indigo[50],
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 0, 0, 0),
        title: Image.asset(
          'images/logo.png',
          fit: BoxFit.contain,
          height: 65,
          width: 65,
        ),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.shopping_cart,
              color: const Color.fromARGB(255, 255, 255, 255),
            ),
            onPressed: () => Navigator.pushNamed(context, '/cart'),
            tooltip: 'card',
          )
        ],
        leading: IconButton(
          icon: const Icon(
            Icons.menu,
            color: Color.fromARGB(255, 255, 255, 255),
          ),
          tooltip: 'Menu',
          onPressed: () {},
        ),
        titleSpacing: 00.0,
        centerTitle: true,
        toolbarHeight: 60.2,
        toolbarOpacity: 0.8,
        elevation: 15,
        shadowColor: Colors.black,
      ),
      body: GridView.builder(
        padding: EdgeInsets.all(8.0),
        itemCount: _products.length,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 8,
            crossAxisSpacing: 8,
            childAspectRatio: 0.8),
        itemBuilder: (context, index) {
          return ScopedModelDescendant<CartModel>(
              builder: (context, child, model) {
            return Card(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Ink.image(
                    image: NetworkImage(_products[index].imgUrl),
                    height: 140,
                    width: 150,
                    // fit: BoxFit.cover,
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          _products[index].name,
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16.0,
                          ),
                        ),
                        SizedBox(height: 4.0),
                        Text(
                          "${_products[index].price} D/A",
                          style: TextStyle(
                            color: Colors.grey[700],
                          ),
                        ),
                        Text(
                          _products[index].brand,
                          style: TextStyle(
                            color: Colors.grey[700],
                          ),
                        ),
                        _products[index].discount == "0" ?
                        Text(
                          "",
                          style: TextStyle(
                            color: Colors.redAccent,
                          ),
                        ):
                        Text(
                          "${_products[index].discount} D/A",
                          style: TextStyle(
                            color: Colors.redAccent,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Align(
                          alignment: Alignment.centerRight,
                          child: OutlinedButton(
                            child: Text(
                              "Add",
                              style: TextStyle(
                                color: Colors.white,
                              ),
                            ),
                            onPressed: () => model.addProduct(_products[index]),
                            style: OutlinedButton.styleFrom(
                              backgroundColor:
                                  const Color.fromARGB(255, 230, 149, 143), //
                              side: BorderSide(
                                color: Colors.red,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          });
        },
      ),
    );
  }
}
