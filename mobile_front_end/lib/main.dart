import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List data = [];
  bool loading = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Rcomputer"),
        ),
        body: ListView(
          children: [
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 30),
              child: MaterialButton(
                color: Colors.red,
                textColor: Colors.white,
                onPressed: () async {
                  loading = true;
                  setState(() {});
                  http.Response postFuture = await http.get(
                      Uri.parse('http://127.0.0.1:8000/api/productsFlutter'));
                  var responseBody = jsonDecode(postFuture.body);
                  data.addAll(responseBody);
                  loading = false;
                  setState(() {});
                },
                child: const Text("http request"),
              ),
            ),
            if (loading)
              const Center(
                child: CircularProgressIndicator(),
              ),
              ...List.generate(
                data.length,
                (index) => Card(
                      child: Column(
                        children: [
                          Image.network(
                            "http://127.0.0.1:8000/storage/${data[index]["image"]}",
                            loadingBuilder: (BuildContext context, Widget child, ImageChunkEvent? loadingProgress) {
                              if (loadingProgress == null) {
                                return child;
                              } else {
                                return Center(
                                  child: CircularProgressIndicator(
                                    value: loadingProgress.expectedTotalBytes !=
                                            null
                                        ? loadingProgress
                                                .cumulativeBytesLoaded /
                                            (loadingProgress
                                                    .expectedTotalBytes ??
                                                1)
                                        : null,
                                  ),
                                );
                              }
                            },
                            errorBuilder: (BuildContext context, Object error, StackTrace? stackTrace) {
                              return const Icon(Icons.error);
                            },
                            height: 120,
                            width: 120,
                          )
                        ],
                        // title: Text(
                        //   'title : ${data[index]['name']}'
                        // ),
                        // subtitle: Text(
                        //   """description : ${data[index]["description"]}
                        //   price : ${data[index]['price']}""",
                        // ),
                      ),
                )
              )
          ],
        ),
      ),
    );
  }
}
