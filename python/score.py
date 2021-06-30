player_count = int(input('Enter number of players... '))

player_names = []
player_scores = []
high_score = 0
high_score_index = 0
player_object = {}

for i in range(0, player_count):
    name = input('Enter player ' + str(i + 1) + ' name... ')
    player_names.append(name)
    score = int(input("Enter the score for " + name + "... "))
    player_scores.append(score)
    if(high_score < score):
        high_score = score
        high_score_index = i

    player_object.update({
        name: score
    })


print(player_object)
print(player_names[high_score_index],
      "scored the highest score of ", high_score)

"""
1.get input from user how many players are playing there in a cricket match
2.for loop
3.get the score of 
"""
