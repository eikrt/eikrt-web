package main
import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func blogposts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, getBlogposts(c.Param("filename")))
}
func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/blogposts/:filename", blogposts)
	router.Run("localhost:8080")
}
