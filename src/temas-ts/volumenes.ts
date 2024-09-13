import { Areas } from './areas';

class PrismaVolumen {
    largo: number;
    ancho: number;
    altura: number;

    constructor(largo: number, ancho: number, altura: number) {
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularVolumen(): number {
        const areaBase = Areas.calcularAreaPrisma(this.largo, this.ancho);
        console.log(`Area de la base del prisma: ${areaBase}`);
        return areaBase * this.altura;
    }
}

class PiramideVolumen {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularVolumen(): number {
        const areaBase = Areas.calcularAreaPiramide(this.base);
        console.log(`Area de la base de la pirámide: ${areaBase}`);
        return (areaBase * this.altura) / 30;
    }
}

class CilindroVolumen {
    radio: number;
    altura: number;

    constructor(radio: number, altura: number) {
        this.radio = radio;
        this.altura = altura;
    }

    calcularVolumen(): number {
        const areaBase = Areas.calcularAreaCilindro(this.radio);
        console.log(`Area de la base del cilindro: ${areaBase.toFixed(2)}`);
        return areaBase * this.altura;
    }
}

const prisma = new PrismaVolumen(2,2,2);
console.log(`Volumen del Prisma: ${prisma.calcularVolumen()}`);

const piramide = new PiramideVolumen(10, 2);
console.log(`Volumen de la Pirámide: ${piramide.calcularVolumen()}`);

const cilindro = new CilindroVolumen(3, 7);
console.log(`Volumen del Cilindro: ${cilindro.calcularVolumen().toFixed(2)}`);
