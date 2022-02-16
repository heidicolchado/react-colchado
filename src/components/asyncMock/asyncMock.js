

const productos = [ { id: 1, nombre: "Remera Frase", imagen:"./remerafrase", stock: 6, descripcion:"remera frase" },
        { id: 2, nombre: "Remera Foto", imagen:"./remerafoto", stock: 4, descripcion:"Remera foto" },
        { id: 3, nombre: "Remera Bowie", imagen:"./remerabowie", stock: 4, descripcion:"Remera bowie"}

]
export const getProducts =() =>{
    return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
            resolve(productos)
    
        },2000)
    
        })
    
    }