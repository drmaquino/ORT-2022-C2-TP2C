import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://ort_tp2_user:ort_tp2_pass@mymaincluster.eucl2.mongodb.net/ort_tp2?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect()

export default class HistorialDeDonacionesMongoDb {
    #donaciones

    constructor() {
        this.#donaciones = client.db("ort_tp2").collection("donaciones");
    }

    async registrar(donacion) {
        await this.#donaciones.insertOne(donacion)
    }

    async listarTodas() {
        return await this.#donaciones.find().toArray()
    }
}