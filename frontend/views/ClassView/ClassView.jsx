import React from 'react';
import PropTypes from 'prop-types';
import { Editor, Table, TableHead, TableBody, TableRow, Th, Td } from 'frontend/components/data';
import { Card } from 'frontend/components/display';
import { Container, Flex } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { FONT_SIZE, SPACING } from 'frontend/styles/constants';
import NotFoundView from 'frontend/views/NotFoundView';
import {
    ExampleCode,
    SectionHeader,
    ConstructorContainer,
    MethodContainer
} from './ClassView.styled';

const BASE_CLASS_NAME = 'ClassView';

const getDescriptionText = (desc, key) => (
    desc.children.map((paragraph, idx) => (
        <Text key={`${key}-p${idx}`}>
            {paragraph.children.map((text) => text.value).join('\n')}
        </Text>
    ))
);

// TODO: Need to hande UnionType (An array of types)
const getTypeText = (type) => {
    return type.name || (type.expression && type.expression.name) || '-'
}

const ClassView = ({ className, data }) => {
    if (!data) return <NotFoundView />;

    const { description, examples, members, name, params, tags } = data;
    const sortedMembers = [...members.instance].sort((a, b) => (a.name > b.name ? 1 : -1));
    const paramsTag = tags.find((tag) => tag.title === 'params');
    const extendsTag = tags.find((tag) => tag.title === 'extends');

    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            {/* Header */}
            <Header
                tag="h2"
                className={`${BASE_CLASS_NAME}__header`}
                margin={`0 0 ${SPACING.xl}`}
            >
                {name}
            </Header>

            {/* Description */}
            {description.children.length && (
                <Container className={`${BASE_CLASS_NAME}__description`} margin={`0 0 ${SPACING.xl}`}>
                    <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>Description</SectionHeader>
                    {getDescriptionText(description, `${name}-desc`)}
                </Container>
            )}

            {/* Examples */}
            {examples.length > 0 && (
                <Container className={`${BASE_CLASS_NAME}__examples`} margin={`0 0 ${SPACING.xl}`}>
                    <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>Examples</SectionHeader>
                    <Container vGap={SPACING.l}>
                        {examples.map((example, idx) => (
                            <Editor key={`${name}-example${idx}`} content={example.description} />
                        ))}
                    </Container>
                </Container>
            )}

            {/* Constructor */}
            <Container className={`${BASE_CLASS_NAME}__constructor`} margin={`0 0 ${SPACING.xl}`}>
                <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>
                    Constructor({params.map((param) => param.name).join(', ')})
                    {extendsTag && ` extends ${extendsTag.name}`}
                </SectionHeader>
                <Container vGap={SPACING.l}>
                    {params.map((param) => (
                        <ConstructorContainer key={`${name}-param-${param.name}`} vGap={SPACING.s}>
                            <Text fontSize={FONT_SIZE.l}>
                                {param.name} {`<${param.type.name}>`}
                            </Text>
                            <Container>
                                {getDescriptionText(param.description, `${name}-param-${param.name}-desc`)}
                            </Container>
                            {param.properties && (
                                <Container>
                                    <Header tag="h5" margin={`0 0 ${SPACING.s}`}>Params</Header>
                                    <Table size="s" wide>
                                        <TableHead>
                                            <TableRow>
                                                <Th>Name</Th>
                                                <Th>Type</Th>
                                                <Th>Description</Th>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {param.properties.map((prop) => (
                                                <TableRow key={`${name}-param-${prop.name}`}>
                                                    <Td>{prop.name}</Td>
                                                    <Td>{getTypeText(prop.type)}</Td>
                                                    <Td>{getDescriptionText(prop.description,`${prop.name}-desc`)}</Td>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Container>
                            )}
                        </ConstructorContainer>
                    ))}
                </Container>
            </Container>

            {/* Params */}
            {paramsTag && (
                <Container className={`${BASE_CLASS_NAME}__params`} margin={`0 0 ${SPACING.xl}`}>
                    <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>Params</SectionHeader>
                    <Card padding={SPACING.ml}>
                        <ExampleCode>{paramsTag.description}</ExampleCode>
                    </Card>
                </Container>
            )}

            {/* Methods */}
            {sortedMembers.length > 0 && (
                <Container className={`${BASE_CLASS_NAME}__methods`}>
                    <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>Methods</SectionHeader>
                    <Container vGap={SPACING.l}>
                        {sortedMembers.map((method) => (
                            <MethodContainer key={method.namespace} vGap={SPACING.m}>
                                <Text fontSize={FONT_SIZE.l}>
                                    {method.name}({method.params.map((param) => param.name).join(', ')})
                                    {method.returns.length > 0 && ` => ${getTypeText(method.returns[0].type)}`}
                                </Text>
                                {getDescriptionText(method.description, `${method.namespace}-desc`)}
                                {method.returns.length > 0 && (
                                    <Flex gap={SPACING.xs}>
                                        <Text>Returns:</Text>{getDescriptionText(method.returns[0].description)}
                                    </Flex>
                                )}

                                {method.params.length > 0 && (
                                    <Container>
                                        <Header tag="h5" margin={`0 0 ${SPACING.s}`}>Params</Header>
                                        <Table size="s" wide>
                                            <TableHead>
                                                <TableRow>
                                                    <Th>Name</Th>
                                                    <Th>Type</Th>
                                                    <Th>Description</Th>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {method.params.map((param) => (
                                                    <TableRow key={`${name}-param-${param.name}`}>
                                                        <Td>{param.name}</Td>
                                                        <Td>{getTypeText(param.type)}</Td>
                                                        <Td>{param.description && getDescriptionText(param.description, `${param.name}-desc`)}</Td>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Container>
                                )}

                                {/* Method Exmaples */}
                                {method.examples.length > 0 && (
                                    <Container>
                                        {method.examples.map((example, idx) => (
                                            <Container key={`${method.namespace}-example${idx}`}>
                                                <Header tag="h5" margin={`0 0 ${SPACING.s}`}>Examples</Header>
                                                <Editor content={example.description} />
                                            </Container>
                                        ))}
                                    </Container>
                                )}
                            </MethodContainer>
                        ))}
                    </Container>
                </Container>
            )}
        </Container>
    );
};

ClassView.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        description: PropTypes.object.isRequired,
        examples: PropTypes.array.isRequired,
        members: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        params: PropTypes.array.isRequired,
        returns: PropTypes.array.isRequired,
        tags: PropTypes.array.isRequired,
    }),
};

ClassView.defaultProps = {
    className: '',
};

export default ClassView;
