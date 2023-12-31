const AirQualityTable = () => {
  const levels = [
    { range: '0 - 50', level: 'Good' },
    { range: '51 - 100', level: 'Moderate' },
    { range: '101 - 150', level: 'Unhealthy for Sensitive Groups' },
    { range: '151 - 200', level: 'Unhealthy' },
    { range: '201 - 300', level: 'Very Unhealthy' },
    { range: '301 and higher', level: 'Hazardous' },
  ];

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title"> Air Quality levels</h5>
          <table className="table table-bordered">
            <thead>
              <th scope="col"> AQI Range</th>{' '}
              <th scope="col"> Level of Health Concern</th>
            </thead>
            <tbody>
              {levels.map(({ range, level }, i) => (
                <tr key={i}>
                  <td>{range}</td>
                  <td>{level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AirQualityTable;
