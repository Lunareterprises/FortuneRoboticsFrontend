import React from "react";

const Research = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="timeline-row">
          {/* Card above 2025–2026 */}
          <div className="timeline-item">
            <div className="timeline-card card-1">Card 1</div>
            2025–2026
          </div>
          <div className="vertical-line"></div>

          {/* Card above 2027–2028 */}
          <div className="timeline-item">
            <div className="timeline-card card-2">Card 2</div>
            2027–2028
          </div>
          <div className="vertical-line"></div>

          {/* Card above 2029–2030 */}
          <div className="timeline-item">
            <div className="timeline-card card-3">Card 3</div>
            2029–2030
          </div>
          <div className="vertical-line"></div>

          {/* Card above Beyond 2030 */}
          <div className="timeline-item">
            <div className="timeline-card card-4">Card 4</div>
            Beyond 2030
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .timeline-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
        }

        .timeline-item {
          flex: 1;
          text-align: center;
          font-weight: bold;
          position: relative;
        }

        .timeline-card {
          background-color: #007bff;
          color: #fff;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 10px;
          width: 180px; /* increased width */
          position: relative;
        }

        /* Staggered / staircase effect */
        .card-1 {
          top: 100px;
        }
        .card-2 {
          top: 150px;
        }
        .card-3 {
          top: 190px;
        }
        .card-4 {
          top: 250px;
        }

        .vertical-line {
          width: 2px;
          border-left: 2px dotted #6c757d;
          height: 500px; /* adjust as needed */
          margin: 0 0px;
        }

        @media (max-width: 768px) {
          .timeline-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-item {
            text-align: left;
            margin-bottom: 10px;
          }
          .vertical-line {
            width: 2px;
            height: 300px;
            margin: 10px 0;
          }
          .timeline-card {
            top: 0px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Research;
