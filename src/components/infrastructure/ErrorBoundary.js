import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary" role="alert">
                    <h2>Něco se pokazilo</h2>
                    <p>Omlouváme se, ale došlo k neočekávané chybě.</p>
                    <details>
                        <summary>Technické detaily</summary>
                        <pre>{this.state.error && this.state.error.toString()}</pre>
                        <pre>{this.state.errorInfo.componentStack}</pre>
                    </details>
                    <button 
                        onClick={() => window.location.reload()}
                        className="retry-button"
                    >
                        Obnovit stránku
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
