const QuestionResponse = (questions:any) => {
    const result = JSON.parse(questions.questions.response?.text());
    console.log("questions",result);
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Questions and Answers</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {questions.map((item:any, index:any) => (
                <li
                    key={index}
                    style={{
                    marginBottom: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h3 style={{ margin: '0 0 10px' }}>
                    {index + 1}. {item.question}
                    </h3>
                    {item.options && (
                    <ul style={{ paddingLeft: '20px' }}>
                        {item.options.map((option:any, i:any) => (
                        <li key={i} style={{ marginBottom: '5px' }}>
                            {option}
                        </li>
                        ))}
                    </ul>
                    )}
                    <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    Answer: {item.answer}
                    </p>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default QuestionResponse