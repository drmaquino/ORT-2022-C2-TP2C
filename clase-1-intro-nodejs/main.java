public class Persona {
    private String nombre;
    private int edad;
    private static int cantPersonas;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
        Persona.cantPersonas++;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(value) {
        if (value == null) {
            throw new IllegalArgumentException("el nombre es un campo requerido");
        }
        this.nombre = value;
    }

    public void saludar() {
        String saludo = String.format("hola! soy %s", this.nombre);
        System.out.print(saludo);
    }
}

public class Main {
    public static void main(String[] args) {
        String saludo = "hola mundo";
        System.out.println(saludo);

        Persona p = new Persona("marian", 36);
        System.out.println(p.nombre);

        p.setNombre("pepe");

        p.saludar();
    }
}