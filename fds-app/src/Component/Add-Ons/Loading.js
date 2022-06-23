import React from 'react'

function Loading() {
    return (
        <div>
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Updating...
            </button>
        </div>
    )
}

export default Loading
