import { calculateInvestmentResults } from "../util/investment.js";
export default function Results({ input }) {
    const resultData = calculateInvestmentResults(input);
    console.log(resultData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((data) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{data.valueEndOfYear.toFixed(2)}</td>
                        <td>{data.interest.toFixed(2)}</td>
                        <td>{(data.valueEndOfYear - input.initialInvestment - data.annualInvestment * data.year).toFixed(2)}</td>
                        <td>{(input.initialInvestment + data.annualInvestment * data.year).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>        
        </table>
    );
}   