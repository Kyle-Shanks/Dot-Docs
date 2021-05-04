import React from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS_NAME = 'Test'

const Test = ({ className }) => {

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            Testing...
        </div>
    )
}

Test.propTypes = {
    className: PropTypes.string,
}

Test.defaultProps = {
    className: '',
}

export default Test