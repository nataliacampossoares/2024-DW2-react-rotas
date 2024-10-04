import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/Estado/SemEstado";
import { ComEstado } from "./pages/Estado/ComEstado";
import { CampoTexto } from "./pages/Estado/CampoTexto";
import { Contador } from "./pages/Estado/Contador";
import { ComunicacaoDireta } from "./pages/Comunicação/ComunicacaoDireta";
import { ComunicacaoIndireta } from "./pages/Comunicação/ComunicacaoIndireta";
import { UseRef } from "./pages/Hooks-básicos/UseRef";
import { UseEffect } from "./pages/Hooks-básicos/UseEffect";

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="semEstado" element={<SemEstado />} />
      <Route path="comEstado" element={<ComEstado/>}/>
      <Route path="campoTexto" element={<CampoTexto/>}/>
      <Route path="contador" element={<Contador/>}/>
      <Route path="comunicacaoDireta" element={<ComunicacaoDireta/>}/>
      <Route path="comunicacaoIndireta" element={<ComunicacaoIndireta/>}/>
      <Route path="useRef" element={<UseRef/>}/>
      <Route path="useEffect" element={<UseEffect/>}/>
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
