import React from 'react';
import PropTypes from 'prop-types';
import Box from 'frontend/components/layout/Box';
import Link from 'frontend/components/typography/Link';
import Text from 'frontend/components/typography/Text';
import { Separator } from './Breadcrumbs.styled';

const DEFAULT_SEPARATOR = '/';

const Breadcrumbs = ({ className, crumbs, separator, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Breadcrumbs';

    const renderCrumbs = () => {
        const output = [];

        for (let i in crumbs) {
            const crumb = crumbs[i];
            const el = crumb.href
                ? (
                    <Link
                        key={`Breadcrumbs_${crumb.label}`}
                        href={crumb.href}
                    >
                        {crumb.label}
                    </Link>
                ) : (
                    <Text
                        key={`Breadcrumbs_${crumb.label}`}
                        display="inline-block"
                    >
                        {crumb.label}
                    </Text>
                );

            output.push(el);
            if (i < crumbs.length - 1) {
                output.push(
                    <Separator key={`BreadcrumbsSeparator_${i}`}>{separator}</Separator>
                );
            }
        }

        return output;
    };

    return (
        <Box className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {renderCrumbs()}
        </Box>
    );
};

Breadcrumbs.propTypes = {
    className: PropTypes.string,
    crumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
        })
    ).isRequired,
    separator: PropTypes.string,
};

Breadcrumbs.defaultProps = {
    className: '',
    separator: DEFAULT_SEPARATOR,
};

export default Breadcrumbs;
