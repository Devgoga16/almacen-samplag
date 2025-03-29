import React, { useState } from "react";
import "./InventoryTabs.css";
import { Ingresos } from "./Tabs/Ingresos/Ingresos";
import { Salidas } from "./Tabs/Salidas/Salidas";
import { Productos } from "./Tabs/Productos/Productos";

const InventoryTabs = () => {
    const [activeTab, setActiveTab] = useState("Ingresos");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="container">
            {/* Sidebar con clases dinámicas */}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="title"><br></br>Almacen
                    <br></br>SAMPLAG</div>
                <button
                    className={`tab-button ${activeTab === "Ingresos" ? "active" : ""}`}
                    onClick={() => { setActiveTab("Ingresos"); setSidebarOpen(false); }}
                >
                    Ingresos
                </button>
                <button
                    className={`tab-button ${activeTab === "Salidas" ? "active" : ""}`}
                    onClick={() => { setActiveTab("Salidas"); setSidebarOpen(false); }}
                >
                    Salidas
                </button>
                <button
                    className={`tab-button ${activeTab === "Productos" ? "active" : ""}`}
                    onClick={() => { setActiveTab("Productos"); setSidebarOpen(false); }}
                >
                    Productos
                </button>
            </div>

            {/* Botón flotante para abrir la sidebar en móvil */}
            <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
                ☰
            </button>

            {/* Área de contenido */}
            <div className="content">
                {activeTab === "Ingresos" && <Ingresos />}
                {activeTab === "Salidas" && <Salidas />}
                {activeTab === "Productos" && <Productos />}
            </div>
        </div>
    );
};

export default InventoryTabs;
