import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Statistics.css";

const stats = [
    { label: "I have been cyberbullied", percent: 32.7 },
    { label: "Excluded from online activities", percent: 32.5 },
    { label: "Someone posted mean comments", percent: 26.3 },
    { label: "Someone stalked me online", percent: 21.6 },
    { label: "Someone tracked my location", percent: 17.8 },
];

export default function Statistics() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(canvasRef.current, {
            type: "bar",
            data: {
                labels: stats.map((s) => s.label),
                datasets: [
                    {
                        label: "Percentage (%)",
                        data: stats.map((s) => s.percent),
                        backgroundColor: "#1a4a6b",
                        borderRadius: 6,
                    },
                ],
            },
            options: {
                indexAxis: "y",        
                responsive: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: {
                        min: 0,
                        max: 100,
                        ticks: {
                            callback: (value) => value + "%",
                        },
                    },
                },
            },
        });
        return () => chart.destroy();

    }, []);

    return (
        <section id="statistics" className="statistics-section">
            <h2>Cyberbullying by the numbers</h2>
                <p className="statistics-description">
                    3,466 13-17 Year Old Students Surveyed in 2025
                </p>
                <p className="statistics-source">
                    Source: <a href="https://cyberbullying.org/2025-cyberbullying-data" target="_blank" rel="noreferrer">
                        Cyberbullying Research Center
                    </a>
                </p>
            <div className="chart-container">
                <canvas ref={canvasRef}></canvas>
            </div>
        </section>
    );
}