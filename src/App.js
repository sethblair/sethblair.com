import React, { useCallback } from 'react';
import {
    Container,
    Stack,
    Group,
    Avatar,
    Text,
    Button,
    ActionIcon,
    Paper,
    Box,
} from '@mantine/core';
import {
    IconBrandLinkedin,
    IconBrandInstagram,
    IconFile,
    IconMail,
} from '@tabler/icons-react';
import './App.css';

const SOCIAL_LINKS = [
    {
        href: 'mailto:me@sethblair.com',
        icon: IconMail,
        label: 'Email',
        // Mantine 8: use the `color` prop with variant="light" — the component
        // derives both background and icon tint from a single color token.
        color: 'blue',
    },
    {
        href: 'https://www.linkedin.com/in/sethblair/',
        icon: IconBrandLinkedin,
        label: 'LinkedIn',
        color: 'orange',
        external: true,
    },
    {
        href: 'https://www.instagram.com/sethb.me',
        icon: IconBrandInstagram,
        label: 'Instagram',
        color: 'teal',
        external: true,
    },
];

const BIO_PARAGRAPHS = [
    "I'm a Certified Salesforce Administrator and Developer who genuinely enjoys turning messy processes into tools people actually want to use. Over the years, I've built a strong foundation in automation, system architecture, and user-focused design within the Salesforce ecosystem, creating solutions that are not just functional, but thoughtfully crafted.",
    "More recently, I've expanded into web development, building modern internal applications mostly with React and Mantine. I've designed and developed staff scheduling systems, complete manager dashboards, fleet management tools for vehicle health and mileage, passenger tracking systems, and streamlined core web apps that bring critical workflows together in one clean, intuitive interface. I care deeply about usability. If it feels clunky, it isn't done yet.",
    "My sweet spot lives at the intersection of logic the human experience. I enjoy architecting data models, optimizing complex workflows, and especially building front-end experiences that feel fast, clear, intuitive, and intentional. Whether I'm refining a Salesforce org or developing a full-featured web application, the goal is the same: make powerful systems feel simple.",
    "Outside of work, I'm usually in the garden, marveling at native plants, tracking which pollinators are visiting, and figuring out how to make my little patch of earth more hospitable to birds and beneficial insects. I love the slow process of cultivating something sustainable, thoughtful, and alive. It turns out building good software and building a healthy ecosystem have a lot in common!",
];


const ACTION_ROW_HEIGHT = 38;

function App() {
    const handleEntryAnimationEnd = useCallback((e) => {
        e.currentTarget.classList.add('loaded');
    }, []);

    return (
        <Box
            className="app-wrapper"
            mih="100vh"
            display="flex"
            style={{ flexDirection: 'column' }}
            bg="orange.0"
        >
            {/* Main Content */}
            <Box
                flex={1}
                display="flex"
                style={{ alignItems: 'center', justifyContent: 'center' }}
                py={40}
                px={20}
            >
                <Container size="sm" w="100%">
                    <Stack gap={16} align="center">

                        {/* Profile Section */}
                        <Stack gap={24} align="center" w="100%">
                            <Avatar
                                src={`${process.env.PUBLIC_URL}/me.jpg`}
                                size={120}
                                radius={120}
                                className="profile-avatar"
                                style={{ border: '3px solid var(--mantine-color-rose-5)' }}
                                alt="Seth Blair"
                            />
                            <Stack gap={8} align="center">
                                <Text
                                    component="h1"
                                    fw={700}
                                    fz="2.5rem"
                                    c="dark.9"
                                    lts="-0.5px"
                                >
                                    Seth Blair
                                </Text>
                                <Text
                                    component="p"
                                    fw={500}
                                    c="rose.5"
                                    lts="0.5px"
                                    fz="1.1rem"
                                >
                                    Web Development • Salesforce Development
                                </Text>
                            </Stack>
                        </Stack>

                        {/* Bio Section */}
                        <Paper
                            component="section"
                            aria-label="About Seth"
                            p={32}
                            radius="lg"
                            bg="white"
                            style={{ border: '1px solid var(--mantine-color-orange-2)' }}
                            className="bio-card"
                        >
                            <Stack gap={16}>
                                {BIO_PARAGRAPHS.map((text, i) => (
                                    <Text key={text.slice(0, 30)} size="sm" lh={1.6} c="dark.6">
                                        {text}
                                    </Text>
                                ))}
                            </Stack>
                        </Paper>
                        <Box w={{ base: '100%', xs: '60%', sm: '40%' }}>
                            <Stack gap={12}>
                                <Group gap={12} justify="space-between" grow>
                                    {SOCIAL_LINKS.map(({ href, icon: Icon, label, color, external }) => (
                                        <ActionIcon
                                            key={label}
                                            component="a"
                                            href={href}
                                            aria-label={label}
                                            title={label}
                                            h={ACTION_ROW_HEIGHT}
                                            radius="md"
                                            variant="light"
                                            color={color}
                                            className="social-icon"
                                            onAnimationEnd={handleEntryAnimationEnd}
                                            {...(external && {
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            })}
                                        >
                                            <Icon size={22} aria-hidden="true" />
                                        </ActionIcon>
                                    ))}
                                </Group>

                                <Button
                                    component="a"
                                    href={`${process.env.PUBLIC_URL}/Seth Blair Resume.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    h={ACTION_ROW_HEIGHT}
                                    radius="md"
                                    fullWidth
                                    variant="filled"
                                    leftSection={<IconFile size={18} aria-hidden="true" />}
                                    fw={500}
                                    className="resume-button"
                                    onAnimationEnd={handleEntryAnimationEnd}
                                >
                                    View Resume
                                </Button>
                            </Stack>
                        </Box>

                    </Stack>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                py={20}
                ta="center"
                bg="orange.0"
            >
                <Text size="sm" c="dimmed">
                    &copy; 2026 Seth Blair
                </Text>
            </Box>
        </Box>
    );
}

export default App;