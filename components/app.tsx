import React from 'react';
import { Box, Text, VStack, HStack, Center, Circle, Square, AspectRatio, InputRightElement } from '@chakra-ui/react';
import { Flex, Spacer, Grid, GridItem, Stack, StackDivider, Progress } from '@chakra-ui/react';
import { Image, Editable, EditableInput, EditablePreview, EditableTextarea, Badge, Link } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputAddon } from '@chakra-ui/react';
import { PinInput, PinInputField, Button } from '@chakra-ui/react';
import { Search2Icon, SearchIcon, ViewIcon,  ViewOffIcon } from '@chakra-ui/icons';


export default function (){
    return (
        <Box>
            {/* Header */}
            <Box p={5} w="100%" h="100px" display="flex" alignItems="center" bg="rgb(235, 249, 255)">
                <Center w="100%">
                    <Text fontSize="6xl" fontWeight="bold" color="rgb(17, 79, 95)">Portfolio</Text>
                </Center>
            </Box>

            <Box minH="100vh" p={8} bg="rgb(235, 249, 255)" >
            {/* 전체 컨텐츠를 중앙에 배치하기 위한 Box */}
            <Box maxW="1200px" margin="0 auto">
        
                {/* Banner */}
                <Box borderRadius="lg" border="1px solid rgb(224,236,239)" overflow="hidden">
                    <Image src={"/img/banner3.png"} w="1200px"/>
                </Box>

                {/* About Me and Contact Section */}
                <Box display="flex" justifyContent="space-between" mt={10} mb={8}>
                {/* ABOUT ME */}
                <Box w="60%" bg="white" p={6} borderRadius="lg" boxShadow="md" border="4px solid rgb(17, 79, 95)">
                    <Text fontSize="2xl" fontWeight="bold">ABOUT ME</Text>
                    <Text mt={4}>
                    안녕하세요, 신입 백엔드 개발자입니다. 다양한 기술을 익히고, 문제를 해결하는 것을 즐기며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 목표로 하고 있습니다.
                    </Text>
                </Box>
        
                {/* CONTACT */}
                <Box w="35%" bg="white" p={6} borderRadius="lg" boxShadow="md" border="4px solid rgb(17, 79, 95)">
                    <Text fontSize="2xl" fontWeight="bold">CONTACT</Text>
                    <Text mt={4}>Email: iyonghyeon1@gmail.com</Text>
                    <HStack>
                        <Text>Github: </Text>
                        <Link href='https://github.com/YongHyeons' isExternal>
                            <HStack>
                                <Text>https://github.com/YongHyeons</Text>
                                <Image src='/img/git.svg' alt="gitlogo" boxSize="24px" />
                            </HStack>
                        </Link>
                    </HStack>
                    <HStack>
                        <Text>Notion: </Text>
                        <Link href='https://www.notion.so/117e0582827780818a68c2d9978cac52?pvs=4' isExternal>
                            <HStack>
                                <Text>My Notion</Text>
                                <Image src='/img/notion-logo2.png' alt="notion-logo" boxSize="24px" />
                            </HStack>
                        </Link>
                    </HStack>
                </Box>
                </Box>

                {/* Education Section */}
                <Box w="100%" bg="white" p={5} borderRadius="lg" boxShadow="md" mb={8} border="4px solid rgb(17, 79, 95)">
                <Text fontSize="2xl" fontWeight="bold">EDUCATION</Text>
                <HStack mt={4}>
                    <VStack>
                        <Box>2016.03 ~ 2021.02</Box>
                        <Box>명지전문대학</Box>
                    </VStack>
                    <VStack>
                        <Box>컴퓨터공학</Box>
                        <Box>3.35/4.5</Box>
                    </VStack>
                </HStack>
                </Box>
        
                {/* Skills Section */}
                <Box w="100%" bg="white" p={5} borderRadius="lg" boxShadow="md" mb={8} border="4px solid rgb(17, 79, 95)">
                <Text fontSize="2xl" fontWeight="bold">SKILLS</Text>
                <Grid templateColumns="repeat(1, 1fr)" gap={6} mt={4}>
                    <Box>
                        <HStack align={'flex-start'}>
                            <Text fontSize="lg" fontWeight="bold" w={100}>BACKEND</Text>
                                <VStack align={'flex-start'} p={2}>
                                    <Badge colorScheme="blue" mr={2} >Java</Badge>
                                    <Badge colorScheme="green" mr={2}>Spring Boot</Badge>
                                    <Badge colorScheme="orange">JPA</Badge>
                                </VStack>
                        </HStack>  
                    </Box>
                    <Box>
                        <HStack align={'flex-start'}>
                            <Text fontSize="lg" fontWeight="bold" w={100}>FRONTEND</Text>
                                <VStack align={'flex-start'} p={2}>
                                    <Badge colorScheme="pink" mr={2}>HTML</Badge>
                                    <Badge colorScheme="cyan" mr={2}>CSS</Badge>
                                    <Badge colorScheme="yellow">JavaScript</Badge>
                                </VStack>
                        </HStack>
                    </Box>
                    <Box>
                        <HStack align={'flex-start'}>
                            <Text fontSize="lg" fontWeight="bold" w={100}>TOOL</Text>
                                <VStack align={'flex-start'} p={2}>
                                    <Badge colorScheme="purple" mr={2}>Git</Badge>
                                    <Badge colorScheme="red" mr={2}>Docker</Badge>
                                    <Badge colorScheme="green">MySQL</Badge>
                                </VStack>
                        </HStack>
                    </Box>
                </Grid>
                </Box>
        
                {/* Projects Section */}
                <Box w="100%" bg="white" p={5} borderRadius="lg" boxShadow="md" border="4px solid rgb(17, 79, 95)">
                    {/* Team Section */}    
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">Team Projects</Text>
                    <VStack spacing={5} mt={4}>
                        {t_projects.map((project, index) => (
                        <Box key={index} border="4px solid rgb(17, 79, 95)" borderRadius="lg" p={5} w="100%" bg="white" boxShadow="md">
                            <HStack>
                                <Spacer/>
                                    <Image src={project.image} alt={project.title} boxSize="300px" objectFit="cover" />
                                <Spacer/>
                                <VStack align="flex-start" ml={4} w="50%">
                                    <Text fontSize="lg" fontWeight="bold">{project.title}</Text>
                                    <Text>개발 기간: {project.period}</Text>
                                    <Text>참여 인원: {project.personnel}</Text>
                                    <Text>{project.description}</Text>
                                    <HStack>
                                        {project.techStack.map((tech, idx) => (
                                            <Badge key={idx} colorScheme="blue" p={2}>{tech}</Badge>
                                        ))}
                                    </HStack>
                                    <Link href={project.link} isExternal>
                                        <Image src='/img/git.svg' alt="gitlogo" boxSize="24px" />
                                    </Link>
                                </VStack>
                                <Spacer/>
                            </HStack>
                        </Box>
                        ))}
                    </VStack>
                    {/* Personal Section */}
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">Personal Projects</Text>
                    <VStack spacing={5} mt={4}>
                        {p_projects.map((project, index) => (
                        <Box key={index} border="4px solid rgb(17, 79, 95)" borderRadius="lg" p={5} w="100%" bg="white" boxShadow="md">
                            <HStack>
                                <Spacer/>
                                    <Image src={project.image} alt={project.title} boxSize="300px" objectFit="cover" />
                                <Spacer/>
                                <VStack align="flex-start" ml={4} w="50%">
                                    <Text fontSize="lg" fontWeight="bold">{project.title}</Text>
                                    <Text>개발 기간: {project.period}</Text>
                                    <Text>{project.description}</Text>
                                    <HStack>
                                        {project.techStack.map((tech, idx) => (
                                            <Badge key={idx} colorScheme="blue" p={2}>{tech}</Badge>
                                        ))}
                                    </HStack>
                                    <Link href={project.link} isExternal>
                                        <Image src='/img/git.svg' alt="gitlogo" boxSize="24px" />
                                    </Link>
                                </VStack>
                                <Spacer/>
                            </HStack>
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
        image: '/img/cmjjmain.png',
        title: '취미존중',
        period: '2024.08.05 ~ 2024.09.05',
        personnel : '4명',
        description: '취미와 여가활동을 탐색하고, 다양한 원데이 클래스를 개설 및 신청할 수 있는 웹사이트입니다.',
        techStack: ['JAVA', 'Spring Boot', 'HTML', 'TypeScript', 'SCSS', 'Oracle DB'],
        link: 'https://github.com/YongHyeons/CMJJ.git',
      },
      {
        image: '/img/calendermain.png',
        title: '캘린더 프로그램',
        period: '2024.08.05 ~ 2024.09.05',
        personnel : '2명',
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
    ]