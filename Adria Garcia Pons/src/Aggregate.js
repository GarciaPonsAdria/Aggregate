/*
  Insertamos una serie de valores a nuestra colección "Ordenadores" dentro de nuestra base de datos "Adri".
  Los insertaremos mediante la función "insertMany".
  
Estructura: 
      _id: Id
      detallesVenta: {
          fechaVenta: Date
          fechaEntrega: Date
          almacen: String
          descuento: Int
          unidades: Int
      }
      detallesProducto: {
          proveedor: String
          producto: String
          costeUnidad: Int
          precioUnidad: Int
      }


*/

//Drop es una instrucción que nos permite eliminar toda la colección facilitándonos el Insertar nuevos datos o datos actualizados.
db.ordenadores.drop()

//Insert many es una instrucción que ya hemos visto en multitud de ocasiones, nos permite introducir datos de forma ilimitada (a diferencia del insertOne)
db.ordenadores.insertMany([
    {
        _id: 1,
        detallesVenta: {
            fechaVenta: new Date("2020-01-26"),
            fechaEntrega: new Date("2020-04-30"),
            almacen: "Madrid",
            descuento: 0.35,
            unidades: 10
        },
        detallesProducto: {
            proveedor: "Jaimexo",
            producto: "Intel i7",
            costeUnidad: 150,
            precioUnidad: 250
        }
    },
    {_id: 2, detallesVenta: {fechaVenta:new Date("2020-02-12"), fechaEntrega: new Date("2020-03-12"), almacen: "Madrid", descuento: 0.25, unidades:10}, detallesProducto: {proveedor: "Rubiales", producto:"AMD Ryzen 5", costeUnidad: 200, precioUnidad: 350}},
    {_id: 3, detallesVenta: {fechaVenta:new Date("2020-03-13"), fechaEntrega: new Date("2020-04-26"), almacen: "Barcelona", descuento: 0.35, unidades:1}, detallesProducto: {proveedor: "Jaimexo", producto:"Logitech Pro Experience", costeUnidad: 60, precioUnidad: 120}},
    {_id: 4, detallesVenta: {fechaVenta:new Date("2020-04-16"), fechaEntrega: new Date("2020-05-17"), almacen: "Madrid", descuento: 0.15, unidades:3}, detallesProducto: {proveedor: "Jaimexo", producto:"Tromsart Blue Snowball", costeUnidad: 95, precioUnidad: 140}},
    {_id: 5, detallesVenta: {fechaVenta:new Date("2020-06-19"), fechaEntrega: new Date("2020-07-13"), almacen: "Madrid", descuento: 0, unidades:6}, detallesProducto: {proveedor: "Jaimexo", producto:"Holy template", costeUnidad: 25, precioUnidad: 115}},
    {_id: 6, detallesVenta: {fechaVenta:new Date("2020-05-21"), fechaEntrega: new Date("2020-06-03"), almacen: "Madrid", descuento: 0.05, unidades:9}, detallesProducto: {proveedor: "Rubiales", producto:"Logitech K200", costeUnidad: 55, precioUnidad: 240}},
    {_id: 7, detallesVenta: {fechaVenta:new Date("2020-08-06"), fechaEntrega: new Date("2020-09-26"), almacen: "Barcelona", descuento: 0.10, unidades:12}, detallesProducto: {proveedor: "Jaimexo", producto:"NOX Supreme A2", costeUnidad: 150, precioUnidad: 190}},
    {_id: 8, detallesVenta: {fechaVenta:new Date("2020-06-04"), fechaEntrega: new Date("2020-08-27"), almacen: "Sevilla", descuento: 0.30, unidades:2}, detallesProducto: {proveedor: "Rubiales", producto:"ASUS Headphones Experience", costeUnidad: 220, precioUnidad: 245}},
    {_id: 9, detallesVenta: {fechaVenta:new Date("2020-07-03"), fechaEntrega: new Date("2020-09-18"), almacen: "Barcelona", descuento: 0.20, unidades:3}, detallesProducto: {proveedor: "Jaimexo", producto:"ASUS ProMonitor 3000", costeUnidad: 150, precioUnidad: 235}},
    {_id: 10, detallesVenta: {fechaVenta:new Date("2020-02-02"), fechaEntrega: new Date("2020-03-15"), almacen: "Barcelona", descuento: 0.15, unidades:7}, detallesProducto: {proveedor: "Rubiales", producto:"Apple Mousepad", costeUnidad: 640, precioUnidad: 950}},
    {_id: 11, detallesVenta: {fechaVenta:new Date("2020-03-01"), fechaEntrega: new Date("2020-05-02"), almacen: "Madrid", descuento: 0.40, unidades:3}, detallesProducto: {proveedor: "Rubiales", producto:"MAC Book AIR", costeUnidad: 850, precioUnidad: 1200}},
    {_id: 12, detallesVenta: {fechaVenta:new Date("2020-04-29"), fechaEntrega: new Date("2020-06-10"), almacen: "Madrid", descuento: 0.20, unidades:2}, detallesProducto: {proveedor: "Jaimexo", producto:"Razer ProMouse", costeUnidad: 350, precioUnidad: 420}},
    {_id: 13, detallesVenta: {fechaVenta:new Date("2020-05-30"), fechaEntrega: new Date("2020-07-07"), almacen: "Madrid", descuento: 0.10, unidades:12}, detallesProducto: {proveedor: "Jaimexo", producto:"ASUS Keyboard", costeUnidad: 250, precioUnidad: 400}},
    {_id: 14, detallesVenta: {fechaVenta:new Date("2020-06-28"), fechaEntrega: new Date("2020-08-05"), almacen: "Madrid", descuento: 0.15, unidades:24}, detallesProducto: {proveedor: "Jaimexo", producto:"Gigabyte b450m", costeUnidad: 500, precioUnidad: 650}},
    {_id: 15, detallesVenta: {fechaVenta:new Date("2020-10-20"), fechaEntrega: new Date("2020-12-15"), almacen: "Barcelona", descuento: 0.15, unidades:1}, detallesProducto: {proveedor: "Jaimexo", producto:"Benq Zowie 232LQ", costeUnidad: 300, precioUnidad: 350}},
    {_id: 16, detallesVenta: {fechaVenta:new Date("2020-11-18"), fechaEntrega: new Date("2020-12-23"), almacen: "Barcelona", descuento: 0.35, unidades:1}, detallesProducto: {proveedor: "Rubiales", producto:"Corsair hs35", costeUnidad: 120, precioUnidad: 170}},
    {_id: 17, detallesVenta: {fechaVenta:new Date("2020-03-10"), fechaEntrega: new Date("2020-6-12"), almacen: "Sevilla", descuento: 0.20, unidades:2}, detallesProducto: {proveedor: "Jaimexo", producto:"MSI b450", costeUnidad: 120, precioUnidad: 250}},
]);

/*
    La instrucción está explicada en el PDF para una mayor legibilidad del documento.
*/

db.ordenadores.aggregate([
    {$match: 
        {"detallesProducto.proveedor": "Jaimexo"}
    },
    {$group:
        {
            _id: {
                Almacén:"$detallesVenta.almacen",
                Mes: {$month: "$detallesVenta.fechaVenta"}
            },
            gananciasTotales: {$sum: {$multiply: ["$detallesVenta.unidades","$detallesProducto.precioUnidad",{$sum: ["$detallesVenta.descuento",1]}]}},
            costesTotales: {$sum: {$multiply: ["$detallesVenta.unidades","$detallesProducto.costeUnidad"]}}
        }
    },
    {$project: 
        {
            Almacén: "$_id.Almacén",
            Mes: "$_id.Mes",
            _id: 0,
            gananciasNeto: "$gananciasTotales",
            costesTotales: "$costesTotales",
            beneficioNeto: {$round: {$subtract: ["$gananciasTotales","$costesTotales"]}},
            impuestos: {$round: {$multiply: [{$subtract: ["$gananciasTotales","$costesTotales"]},0.21]}},
            beneficioTotal: {$round: {$multiply: [{$subtract: ["$gananciasTotales","$costesTotales"]},1.21]}} 
        }
    },
    {$sort:
        {"Almacén":1, "Mes":1}
    },
    {$match:
        {$expr: {$lt: [{$multiply: ["$costesTotales",1.5]},"$beneficioTotal"]}}
    }
]).pretty();