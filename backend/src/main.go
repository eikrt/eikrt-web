package main
import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func blogposts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, getBlogposts(c.Param("filename")))
}
func latestposts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, getLatestposts("all"))
}
func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/blogposts/:filename", blogposts)
	router.GET("/latestposts/all", latestposts)
	router.Run("localhost:8080")
}
