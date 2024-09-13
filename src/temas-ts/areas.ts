
export class Areas {

    static calcularAreaPrisma(largo: number, ancho: number): number {
        return largo * ancho;
    }

    static calcularAreaPiramide(base: number): number {
        return base * base;
    }

    static calcularAreaCilindro(radio: number): number {
        return Math.PI * radio * radio;
    }
}
