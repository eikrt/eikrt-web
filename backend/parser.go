package main
import (
	"fmt"
	"bufio"
	"os"
	"strings"
)
type post struct {
    Title string  `json:"title"`
    Body string  `json:"body"`
}
func getAndParseOrgFiles(p string) []post{
	file, err := os.Open(fmt.Sprintf("../posts/%s/posts.emd",p))
	if err != nil {
		fmt.Printf("File does not exist")
	}
	defer file.Close()
	
	scanner := bufio.NewScanner(file)
	returnPosts := []post {} 
	for scanner.Scan() {
		if len(scanner.Text()) == 0 {
			continue
		}
		
		firstSymbol := scanner.Text()[0:1]
		if firstSymbol == "*" {
			returnPosts = append(returnPosts, post{Title: "", Body: ""})
			returnPosts[len(returnPosts)-1].Title = strings.ReplaceAll(scanner.Text(), "*", "") + "\n"
		} else {
			returnPosts[len(returnPosts)-1].Body = returnPosts[len(returnPosts)-1].Body + scanner.Text() + "\n"
		}
		
	}
	return returnPosts
}

func getBlogposts(s string) []post {
	return getAndParseOrgFiles(s)
}
