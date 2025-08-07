// controllers/apiController.js
import { sobrePlatos, razonPlatos, catalogoPlatos, dolar } from '../models/Restaurante.js';

export const obtenerDatosInicio = async (req, res) => {
  try {
    const dolarRecord = await dolar.findOne({});
    const dolarSalida = dolarRecord ? dolarRecord.precio : null;

    const sobrePlatosSalida = await sobrePlatos.findAll();
    const [sobrePlatosSalidaIzquierda, sobrePlatosSalidaDerecha] = [
      sobrePlatosSalida.slice(0, 3),
      sobrePlatosSalida.slice(-3),
    ];

    const razonPlatosSalida = await razonPlatos.findAll();
    const catalogoPlatosSalida = await catalogoPlatos.findAll();

    res.json({
      dolarSalida,
      sobrePlatosSalidaIzquierda,
      sobrePlatosSalidaDerecha,
      razonPlatosSalida,
      catalogoPlatosSalida,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los datos.' });
  }
};

export const obtenerPlatos = async (req, res) => {
    try {
        const dolarRecord = await dolar.findOne({});
        const dolarSalida = dolarRecord ? dolarRecord.precio : null;
        const platosSalida = await catalogoPlatos.findAll();
        res.json({ 
            platosSalida, 
            dolarSalida
        });
  } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los platos.' });
  }
};

export const obtenerPlatoPorSlug = async (req, res) => {
  try {
    const slug = req.params.slug || req.query.slug;

    if (!slug) {
      return res.status(400).json({ mensaje: 'Falta el parámetro slug.' });
    }

    const dolarRecord = await dolar.findOne({});
    const dolarSalida = dolarRecord ? dolarRecord.precio : null;

    const platoSlugSalida = await catalogoPlatos.findOne({ where: { slug } });

    if (!platoSlugSalida) {
      return res.status(404).json({ mensaje: 'Plato no encontrado.' });
    }
    
    res.json({
      plato: platoSlugSalida.get({ plain: true }),
      dolar: dolarSalida
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el plato.' });
  }
};