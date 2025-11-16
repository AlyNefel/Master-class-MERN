import React from 'react'

const Login = () => {

return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="card w-100" style={{ maxWidth: '420px' }}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Login</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Login