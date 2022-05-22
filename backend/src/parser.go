package main
import (
	"fmt"
	"bufio"
	"os"
	"strings"
)
type post struct {
	Lines []line  `json:"lines"`
	Heading string  `json:"heading"`
	Date string `json:date`
	IsDateBlogpost bool  `json:"isDateBlogpost"`
	Directory string `json:"directory"`
}
type line struct {
	Line string  `json:"line"`
	Type string  `json:"type"`
}
func loadAndParseFiles(p string, filterDates bool) []post{
	postPath := fmt.Sprintf("../blogposts/%s/posts.emu",p)
	if os.Getenv("ENV") == "prod" {
		postPath = fmt.Sprintf("blogposts/%s/posts.emu",p)
	}
	file, err := os.Open(postPath)
	if err != nil {
		fmt.Printf("File does not exist")
	}
	defer file.Close()
	
	scanner := bufio.NewScanner(file)
	returnPosts := []post {
		post {
			Lines: []line {
				line {
					Line: "",
						Type: "",
					},
				},
						Heading: "",
						Date: "01/01/1970",
						IsDateBlogpost: false,
						Directory: p,
			},
		} 
	isSkipping := false
	if filterDates {
		isSkipping = true
	}
	for scanner.Scan() {
		if len(scanner.Text()) < 5 {
			continue
		}
		firstSymbol := scanner.Text()[0:1]
		secondSymbol := scanner.Text()[1:2]
		thirdSymbol := scanner.Text()[2:3]
		fourthSymbol := scanner.Text()[3:4]
		if firstSymbol == "*" && secondSymbol == "*" && thirdSymbol == "*" && fourthSymbol == "*" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "*", ""),
					Type: "h4",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
		} else if firstSymbol == "*" && secondSymbol == "*" && thirdSymbol == "*" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "*", ""),
					Type: "h3",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
		} else if firstSymbol == "*" && secondSymbol == "*"{
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "*", ""),
					Type: "h2",
					
				}
			returnPosts = append(returnPosts,

				post {
					Lines:	[]line {
						line {
							Line: "",
								Type: "",
							},
						},
						Heading: "",
						Date: "01/01/1970",
						IsDateBlogpost: false,
						Directory: p,
					},
			)
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
			returnPosts[len(returnPosts)-1].Heading = strings.ReplaceAll(scanner.Text(), "*", "")
			if filterDates {
				isSkipping = true 
			}
		} else if firstSymbol == "*" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "*", ""),
					Type: "h1",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
			
			if filterDates {
				isSkipping = true 
			}
			
		} else if firstSymbol == "@" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "@", ""),
					Type: "img",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)

		} else if firstSymbol == "%" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "%", ""),
					Type: "break",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)

		} else if firstSymbol == "?" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "?", ""),
					Type: "date",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
			returnPosts[len(returnPosts)-1].Date = strings.ReplaceAll(scanner.Text(), "?", "")
			if filterDates {
				isSkipping = false
			returnPosts[len(returnPosts)-1].IsDateBlogpost = true
			}
			

		} else {
			l := line {
				Line: scanner.Text(),
					Type: "body",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
		}
			if isSkipping {
				returnPosts[len(returnPosts)-1].Lines = nil
			}
		
	}
	return returnPosts
}
func getBlogposts(s string) []post {
	
	return loadAndParseFiles(s, false)
}
