package main
import (
	"fmt"
	"bufio"
	"os"
	"strings"
)
type post struct {
	Lines []line  `json:"lines"`
}
type line struct {
	Line string  `json:"line"`
	Type string  `json:"type"`
}
func loadAndParseFiles(p string) []post{
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
			[]line {
				line {
					Line: "",
						Type: "",
					},
				},
			},
		} 
	for scanner.Scan() {
		if len(scanner.Text()) == 0 {
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
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
		} else if firstSymbol == "*" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "*", ""),
					Type: "h1",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
		} else if firstSymbol == "@" {
			l := line {
				Line: strings.ReplaceAll(scanner.Text(), "@", ""),
					Type: "img",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)

		} else {
			l := line {
				Line: scanner.Text(),
					Type: "body",
					
				}
			returnPosts[len(returnPosts)-1].Lines = append(returnPosts[len(returnPosts)-1].Lines, l)
		}
		
	}
	return returnPosts
}
func getBlogposts(s string) []post {
	return loadAndParseFiles(s)
}
