import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://ort_tp2_user:ort_tp2_pass@mymaincluster.eucl2.mongodb.net/ort_tp2?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try {
    await client.connect()
    const dbDonaciones = client.db("ort_tp2").collection("donaciones");
    // perform actions on the collection object

    await dbDonaciones.insertOne({ id: 'x1', nombre: 'xa', monto: 1 })
    await dbDonaciones.insertOne({ id: 'x2', nombre: 'xb', monto: 2 })
    await dbDonaciones.insertOne({ id: 'x3', nombre: 'xc', monto: 3 })
    await dbDonaciones.insertOne({ id: 'x4', nombre: 'xd', monto: 4 })

    // console.log(resultado)
} catch (error) {
    console.log(error)
} finally {
    client.close();
}