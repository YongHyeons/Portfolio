import React from 'react';
import { Box, Text, VStack, HStack, Center, Circle, Square, AspectRatio, InputRightElement } from '@chakra-ui/react';
import { Flex, Spacer, Grid, GridItem, Stack, StackDivider, Progress } from '@chakra-ui/react';
import { Image, Editable, EditableInput, EditablePreview, EditableTextarea, Badge, Link } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputAddon } from '@chakra-ui/react';
import { PinInput, PinInputField, Button } from '@chakra-ui/react';
import { Search2Icon, SearchIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Wrap, WrapItem } from '@chakra-ui/react';

export default function () {
    return (
        <Box>
            {/* Header */}
            <Box p={[3, 5]} w="100%" h={["70px", "100px"]} display="flex" alignItems="center" bg="rgb(235, 249, 255)">
                <Center w="100%">
                    <Text fontSize={["4xl", "6xl"]} fontWeight="bold" color="rgb(17, 79, 95)">Portfolio</Text>
                </Center>
            </Box>

            <Box minH="100vh" p={[4, 8]} bg="rgb(235, 249, 255)">
                {/* 전체 컨텐츠를 중앙에 배치하기 위한 Box */}
                <Box maxW="1200px" margin="0 auto" px={[2, 0]}>
                    {/* Banner */}
                    <Box borderRadius="lg" border="1px solid rgb(224,236,239)" overflow="hidden">
                        <Image src={"/img/bannerTest.png"} w="100%" h="auto" />
                    </Box>

                    {/* About Me and Contact Section */}
                    <Box
                        display="flex"
                        flexDirection={["column", "row"]}
                        justifyContent="space-between"
                        mt={10}
                        mb={8}
                    >
                        {/* ABOUT ME */}
                        <Box
                            w={["100%", "63%"]}
                            bg="white"
                            p={[4, 6]}
                            borderRadius="lg"
                            boxShadow="md"
                            border="4px solid rgb(17, 79, 95)"
                        >
                            <Text fontSize={["xl", "2xl"]} fontWeight="bold">ABOUT ME</Text>
                            <Text mt={4} fontSize={["sm", "md"]}>
                                안녕하세요, 신입 백엔드 개발자입니다. 다양한 기술을 익히고, 문제를 해결하는 것을 즐기며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 목표로 하고 있습니다.
                            </Text>
                        </Box>

                        {/* CONTACT */}
                        <Box
                            w={["100%", "35%"]}
                            bg="white"
                            p={[4, 6]}
                            borderRadius="lg"
                            boxShadow="md"
                            border="4px solid rgb(17, 79, 95)"
                        >
                            <Text fontSize={["xl", "2xl"]} fontWeight="bold">CONTACT</Text>
                            <Text mt={4} fontSize={["sm", "md"]}>Email: iyonghyeon1@gmail.com</Text>
                            <HStack fontSize={["sm", "md"]}>
                                <Text>Github: </Text>
                                <Link href='https://github.com/YongHyeons' isExternal>
                                    <HStack>
                                        <Text noOfLines={1}>https://github.com/YongHyeons</Text>
                                        <Image src='/img/git.svg' alt="gitlogo" boxSize={["20px", "24px"]} />
                                    </HStack>
                                </Link>
                            </HStack>
                            <HStack fontSize={["sm", "md"]}>
                                <Text>Notion: </Text>
                                <Link href='https://www.notion.so/117e0582827780818a68c2d9978cac52?pvs=4' isExternal>
                                    <HStack>
                                        <Text>My Notion</Text>
                                        <Image src='/img/notion-logo2.png' alt="notion-logo" boxSize={["20px", "24px"]} />
                                    </HStack>
                                </Link>
                            </HStack>
                        </Box>
                    </Box>

                    {/* Education Section */}
                    <Box w="100%" bg="white" p={[4, 5]} borderRadius="lg" boxShadow="md" mb={8} border="4px solid rgb(17, 79, 95)">
                        <Text fontSize={["xl", "2xl"]} fontWeight="bold">EDUCATION</Text>
                        <Stack direction={["column", "row"]} mt={4} spacing={[2, 4]} align={["flex-start", "center"]}>
                            <VStack align={["flex-start", "center"]} spacing={1}>
                                <Text fontSize={["sm", "md"]}>2016.03 ~ 2021.02</Text>
                                <Text fontSize={["sm", "md"]}>명지전문대학</Text>
                            </VStack>
                            <VStack align={["flex-start", "center"]} spacing={1}>
                                <Text fontSize={["sm", "md"]}>컴퓨터공학</Text>
                                <Text fontSize={["sm", "md"]}>3.35/4.5</Text>
                            </VStack>
                        </Stack>
                    </Box>

                    {/* Skills Section */}
                    <Box w="100%" bg="white" p={[4, 5]} borderRadius="lg" boxShadow="md" mb={8} border="4px solid rgb(17, 79, 95)">
                        <Text fontSize={["xl", "2xl"]} fontWeight="bold">SKILLS</Text>
                        <Grid templateColumns="repeat(1, 1fr)" gap={[4, 6]} mt={4}>
                            <Box>
                                <Stack direction={["column", "row"]} align={["flex-start", "center"]}>
                                    <Text fontSize={["md", "lg"]} fontWeight="bold" w={[null, 100]}>BACKEND</Text>
                                    <Wrap spacing={2}>
                                        <WrapItem><Badge colorScheme="blue" p={2}>Java</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="green" p={2}>Spring Boot</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="orange" p={2}>JPA</Badge></WrapItem>
                                    </Wrap>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction={["column", "row"]} align={["flex-start", "center"]}>
                                    <Text fontSize={["md", "lg"]} fontWeight="bold" w={[null, 100]}>FRONTEND</Text>
                                    <Wrap spacing={2}>
                                        <WrapItem><Badge colorScheme="pink" p={2}>HTML</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="cyan" p={2}>CSS</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="yellow" p={2}>JavaScript</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="green" p={2}>Nest.js</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="red" p={2}>Chakra UI</Badge></WrapItem>
                                    </Wrap>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction={["column", "row"]} align={["flex-start", "center"]}>
                                    <Text fontSize={["md", "lg"]} fontWeight="bold" w={[null, 100]}>TOOL</Text>
                                    <Wrap spacing={2}>
                                        <WrapItem><Badge colorScheme="purple" p={2}>Git</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="red" p={2}>Velcel</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="cyan" p={2}>Oracle</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="yellow" p={2}>Eclipse</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="blue" p={2}>VSCode</Badge></WrapItem>
                                        <WrapItem><Badge colorScheme="green" p={2}>SQL Developer</Badge></WrapItem>
                                    </Wrap>
                                </Stack>
                            </Box>
                        </Grid>
                    </Box>


                    {/* Certifications Section */}
                    <Box w="100%" bg="white" p={[4, 5]} borderRadius="lg" boxShadow="md" mb={8} border="4px solid rgb(17, 79, 95)">
                        <Text fontSize={["xl", "2xl"]} fontWeight="bold">CERTIFICATIONS</Text>
                        <VStack align="stretch" mt={4} spacing={4}>
                            <Stack direction={["column", "row"]} spacing={[2, 4]} align={["flex-start", "center"]}>
                                <Text fontSize={["sm", "md"]} fontWeight="bold" minW={["auto", "150px"]}>2021.06</Text>
                                <Text fontSize={["sm", "md"]}>정보처리산업기사</Text>
                            </Stack>
                            <Stack direction={["column", "row"]} spacing={[2, 4]} align={["flex-start", "center"]}>
                                <Text fontSize={["sm", "md"]} fontWeight="bold" minW={["auto", "150px"]}>2024.07</Text>
                                <Text fontSize={["sm", "md"]}>네트워크관리사 2급</Text>
                            </Stack>
                        </VStack>
                    </Box>

                    {/* Projects Section */}
                    <Box w="100%" bg="white" p={[4, 5]} borderRadius="lg" boxShadow="md" border="4px solid rgb(17, 79, 95)">
                        {/* Team Section */}
                        <Text fontSize={["xl", "2xl"]} fontWeight="bold" textAlign="center">Team Projects</Text>
                        <VStack spacing={[4, 5]} mt={4}>
                            {t_projects.map((project, index) => (
                                <Box key={index} border="4px solid rgb(17, 79, 95)" borderRadius="lg" p={[4, 5]} w="100%" bg="white" boxShadow="md">
                                    <Stack direction={["column", "row"]} spacing={[4, 8]} align="center">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={["100%", "300px"]}
                                            height={["200px", "300px"]}
                                            objectFit="contain"  // "cover" 대신 "contain" 사용
                                            maxH="300px"        // 최대 높이 제한
                                            maxW="300px"
                                        />
                                        <VStack align="flex-start" w={["100%", "50%"]} spacing={2}>
                                            <Text fontSize={["lg", "xl"]} fontWeight="bold">{project.title}</Text>
                                            <Text fontSize={["sm", "md"]}>개발 기간: {project.period}</Text>
                                            <Text fontSize={["sm", "md"]}>참여 인원: {project.personnel}</Text>
                                            <Text fontSize={["sm", "md"]}>{project.description}</Text>
                                            <Wrap spacing={2}>
                                                {project.techStack.map((tech, idx) => (
                                                    <WrapItem key={idx}>
                                                        <Badge colorScheme="blue" p={2} fontSize={["xs", "sm"]}>{tech}</Badge>
                                                    </WrapItem>
                                                ))}
                                            </Wrap>
                                            <Link href={project.link} isExternal>
                                                <Image src='/img/git.svg' alt="gitlogo" boxSize={["20px", "24px"]} />
                                            </Link>
                                        </VStack>
                                    </Stack>
                                </Box>
                            ))}
                        </VStack>

                        {/* Personal Section */}
                        <Text fontSize={["xl", "2xl"]} fontWeight="bold" textAlign="center" mt={8}>Personal Projects</Text>
                        <VStack spacing={[4, 5]} mt={4}>
                            {p_projects.map((project, index) => (
                                <Box key={index} border="4px solid rgb(17, 79, 95)" borderRadius="lg" p={[4, 5]} w="100%" bg="white" boxShadow="md">
                                    <Stack direction={["column", "row"]} spacing={[4, 8]} align="center">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={["100%", "300px"]}
                                            height={["200px", "300px"]}
                                            objectFit="cover"
                                        />
                                        <VStack align="flex-start" w={["100%", "50%"]} spacing={2}>
                                            <Text fontSize={["lg", "xl"]} fontWeight="bold">{project.title}</Text>
                                            <Text fontSize={["sm", "md"]}>개발 기간: {project.period}</Text>
                                            <Text fontSize={["sm", "md"]}>{project.description}</Text>
                                            <Wrap spacing={2}>
                                                {project.techStack.map((tech, idx) => (
                                                    <WrapItem key={idx}>
                                                        <Badge colorScheme="blue" p={2} fontSize={["xs", "sm"]}>{tech}</Badge>
                                                    </WrapItem>
                                                ))}
                                            </Wrap>
                                            <Link href={project.link} isExternal>
                                                <Image src='/img/git.svg' alt="gitlogo" boxSize={["20px", "24px"]} />
                                            </Link>
                                        </VStack>
                                    </Stack>
                                </Box>
                            ))}
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const t_projects = [
    {
        image: '/img/TalkVillageLogo.svg',
        title: 'TalkVlliage',
        period: '2024.12.20 ~ (개발중)',
        personnel: '5명',
        description: '기초부터 고급 영어까지 학습을 도와줄 수 있는 웹 사이트입니다.',
        techStack: ['JAVA', 'Spring Boot', 'React', 'ChakraUI', 'SCSS', 'Oracle DB'],
        link: 'https://github.com/YongHyeons/TalkVillage.git',
    },
    {
        image: '/img/cmjjmain.png',
        title: '취미존중',
        period: '2024.08.05 ~ 2024.09.05',
        personnel: '4명',
        description: '취미와 여가활동을 탐색하고, 다양한 원데이 클래스를 개설 및 신청할 수 있는 웹사이트입니다.',
        techStack: ['JAVA', 'Spring Boot', 'HTML', 'TypeScript', 'SCSS', 'Oracle DB'],
        link: 'https://github.com/YongHyeons/CMJJ.git',
    },
    {
        image: '/img/calendermain.png',
        title: '캘린더 프로그램',
        period: '2024.08.05 ~ 2024.09.05',
        personnel: '2명',
        description: 'PC사용자가 자신의 일정을 효율적으로 관리하거나 계획하기 위해 사용하는 프로그램입니다.',
        techStack: ['JAVA', 'MySQL'],
        link: 'https://github.com/YongHyeons/DiaryProgram.git',
    },
];

const p_projects = [
    {
        image: '/img/bookmain.jpg',
        title: '도서 관리 및 게시판',
        period: '2024.08.05 ~ 2024.09.05',
        description: '도서 관리와 커뮤니티 기능을 통합하여, 도서 애호가들이 효율적으로 책을 관리하고 교류할 수 있도록 돕기 위한 사이트입니다.',
        techStack: ['JAVA', 'JSP', 'HTML', 'CSS', 'MySQL'],
        link: 'https://github.com/YongHyeons/Book-Board.git',
    },
    {
        image: '/img/coffeemain.png',
        title: '커피 전문점 사이트',
        period: '2024.08.05 ~ 2024.09.05',
        description: '커피 전문점에서 제공하는 다양한 음료, 브레드, 그리고 MD 상품에 대한 포괄적인 정보를 제공하는 사이트 입니다.',
        techStack: ['HTML', 'CSS'],
        link: 'https://github.com/YongHyeons/Coffee-Shop.git',
    },
    {
        image: '/img/thumbnail-new.png',
        title: '이용현의 포트폴리오',
        period: '2025.01.20 ~',
        description: '신입 백엔드 개발자 이용현의 포트폴리오입니다.',
        techStack: ['React', 'Chakra UI', 'Vercel'],
        link: 'https://github.com/YongHyeons/Portfolio.git',
    },
];