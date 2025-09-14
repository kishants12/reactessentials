export default function UserInput({onChange, userInput}) {
    return (<section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="current-savings">Initial Investment </label>
                <input type="number"
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment',
                        event.target.value)}
                    required />
            </p>
            <p>
                <label htmlFor="current-savings">Annual Investment </label>
                <input type="number" value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment',
                        event.target.value)} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="current-savings">Expected Return</label>
                <input type="number" id="current-savings" value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn',
                        event.target.value)} required />
            </p>
            <p>
                <label htmlFor="current-savings">Duration </label>
                <input type="number" id="current-savings" value={userInput.duration}
                    onChange={(event) => onChange('duration',
                        event.target.value)} required />
            </p>
        </div>

    </section>);
}   
