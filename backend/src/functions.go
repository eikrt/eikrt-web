package main
import (
    "io/ioutil"
     "log"
     "sort"
     "strconv"
)
func getLatestposts(s string) []post {
	var posts = [][]post{
		
	}
	var flattenedPosts = []post{}
	files, err := ioutil.ReadDir("../blogposts/")
	if err != nil {
	    log.Fatal(err)
	}

	for _, f := range files {
		gotPosts := loadAndParseFiles(f.Name(), true)
		posts = append(posts, gotPosts)
		for _, p := range gotPosts {
			flattenedPosts = append(flattenedPosts,p)
		}
		
	}
	
	sort.SliceStable(flattenedPosts, func(i, j int) bool {
		year1, _ := strconv.Atoi(flattenedPosts[i].Date[6:10])
		year2, _ := strconv.Atoi(flattenedPosts[j].Date[6:10])
		month1, _ := strconv.Atoi(flattenedPosts[i].Date[3:4])
		month2, _ := strconv.Atoi(flattenedPosts[j].Date[3:4])
		day1, _ := strconv.Atoi(flattenedPosts[i].Date[0:1])
		day2, _ := strconv.Atoi(flattenedPosts[j].Date[0:1])
		
		return year1 + month1*10 + day1 > year2 + month2*10 + day2
	})
	
	return flattenedPosts
}
