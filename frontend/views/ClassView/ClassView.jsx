import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableRow, Th, Td } from 'frontend/components/data';
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

// TODO: Create a method that can get type strings. Need to hande UnionType (An array of types)

const ClassView = ({ className, data }) => {
    if (!data) return <NotFoundView />;

    const { description, examples, members, name, params, tags } = data;
    const paramsTag = tags.find((tag) => tag.title === 'params');
    const extendsTag = tags.find((tag) => tag.title === 'extends');

    const getDescriptionText = (desc, key) => (
        desc.children.map((paragraph, idx) => (
            <Text key={`${key}-p${idx}`}>
                {paragraph.children.map((text) => text.value).join('\n')}
            </Text>
        ))
    );

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
                            <Card key={`${name}-example${idx}`} padding={SPACING.ml}>
                                <ExampleCode>{example.description}</ExampleCode>
                            </Card>
                        ))}
                    </Container>
                </Container>
            )}

            {/* Constructor */}
            <Container className={`${BASE_CLASS_NAME}__constructor`} margin={`0 0 ${SPACING.xl}`}>
                <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>
                    Constructor {extendsTag && `(extends ${extendsTag.name})`}
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
                                                    <Td>{prop.type.name || (prop.type.expression && param.type.expression.name) || '-'}</Td>
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
            {members.instance.length > 0 && (
                <Container className={`${BASE_CLASS_NAME}__methods`}>
                    <SectionHeader tag="h3" margin={`0 0 ${SPACING.s}`}>Methods</SectionHeader>
                    <Container vGap={SPACING.l}>
                        {members.instance.map((method) => (
                            <MethodContainer key={method.namespace} vGap={SPACING.m}>
                                <Text fontSize={FONT_SIZE.l}>
                                    {method.name}({method.params.map((param) => param.name).join(', ')})
                                    {method.returns.length > 0 && ` => ${method.returns[0].type.name}`}
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
                                                        <Td>{param.type.name || (param.type.expression && param.type.expression.name) || '-'}</Td>
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
                                                <Card padding={SPACING.m}>
                                                    <ExampleCode>{example.description}</ExampleCode>
                                                </Card>
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
